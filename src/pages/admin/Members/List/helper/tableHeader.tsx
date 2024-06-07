import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableHeader: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation();
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.index')}
        </Text>
      ),
      width: 90,
    },
    {
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.name')}
        </Text>
      ),
      width: 10,
    },
    {
      name: 'lastName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.lastName')}
        </Text>
      ),
      width: 350,
    },
    {
      name: 'team',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('field.team')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
