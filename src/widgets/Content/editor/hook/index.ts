import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { IMAGE_TYPES, MAX_IMAGE_SIZE } from '@shared/constants';

export const useEditorWidget = () => {
  const { t } = useTranslation('meetings');
  const [isLoading] = useState(false);

  const { getInputProps, open } = useDropzone({
    maxFiles: 1,
    accept: IMAGE_TYPES,
    maxSize: 4 * MAX_IMAGE_SIZE,
  });

  return {
    getInputProps,
    open,
    isLoading,
    t,
  };
};
