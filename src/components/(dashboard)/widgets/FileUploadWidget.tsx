'use client'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import {
  openEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,
  createDefaultShapePreprocessor,
  processImage,
  setPlugins,
  plugin_crop,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_defaults,
  plugin_annotate,
  markup_editor_defaults,
} from '@pqina/pintura'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFilePoster from 'filepond-plugin-file-poster'
import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor'
import { WidgetProps } from '@rjsf/utils'

registerPlugin(
  FilePondPluginImageEditor,
  FilePondPluginFilePoster,
  FilePondPluginImagePreview,
)
setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate)

export function FileUploadWidget({ id, value, name }: WidgetProps) {
  return (
    <FilePond
      files={value}
      allowMultiple={false}
      name={name}
      id={id}
      // server={`${process.env.NEXT_PUBLIC_API_URL}/avatar/upload`}
      server={{
        process: async (
          fieldName,
          file,
          metadata,
          load,
          error,
          progress,
          abort,
        ) => {
          const formData = new FormData()
          formData.append(fieldName, file, file.name)

          const request = new XMLHttpRequest()
          request.open(
            'POST',
            `${process.env.NEXT_PUBLIC_API_URL}/avatar/upload`,
          )

          request.upload.onprogress = (e) => {
            progress(e.lengthComputable, e.loaded, e.total)
          }

          request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
              const response = JSON.parse(request.responseText)
              load(response.location)
            } else {
              error('oh no')
            }
          }

          request.send(formData)

          return {
            abort: () => {
              request.abort()
              abort()
            },
          }
        },
        load: (file) => {
          console.log(file)
        },
      }}
      // onaddfile={(_, file) => console.log(file)}
      maxFiles={1}
      imageEditor={{
        createEditor: openEditor,
        imageReader: [createDefaultImageReader],
        imageWriter: [createDefaultImageWriter],
        imageProcessor: processImage,

        editorOptions: {
          utils: ['crop', 'finetune', 'filter', 'annotate'],
          imageOrienter: createDefaultImageOrienter(),
          shapePreprocessor: createDefaultShapePreprocessor(),
          ...plugin_finetune_defaults,
          ...plugin_filter_defaults,
          ...markup_editor_defaults,
        },
      }}
    />
  )
}
