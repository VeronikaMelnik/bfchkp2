import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableConfig: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation('results');
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.index')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'place',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.place')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.name')}
        </Text>
      ),
      width: 180,
    },
    {
      name: 'lastName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.lastName')}
        </Text>
      ),
      width: 180,
    },
    {
      name: 'championship',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.championship')}
        </Text>
      ),
    },
    {
      name: 'date',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.date')}
        </Text>
      ),
      width: 107,
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
