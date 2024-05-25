import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableHeader: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation('table');
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
          {t('header.championshipPlace')}
        </Text>
      ),
      width: 230,
    },
    {
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.championshipPlace')}
        </Text>
      ),
      width: 350,
    },
    {
      name: 'personName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.championshipPersonName')}
        </Text>
      ),
    },
    {
      name: 'personLastName',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.championshipPersonLastName')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
