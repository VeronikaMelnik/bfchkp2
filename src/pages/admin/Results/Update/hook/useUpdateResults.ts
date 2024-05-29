import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetChampionships, useGetMembers } from '@features/Admin/Results';
import { useGetCurrentResult } from '@features/Admin/Results/hooks/getCurrent';
import { useUpdateResults } from '@features/Admin/Results/hooks/update';
import { ISelectOption } from '@entities/components/editor';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useUpdateResultsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { update } = useUpdateResults(parseInt(id!));
  const [selectedChampionship, setSelectedChampionship] =
    useState<ISelectOption>();
  const [selectedMember, setSelectedMember] = useState<ISelectOption>();
  const [place, setPlace] = useState<number | ''>('');

  const {
    getData: getChampionships,
    isLoading: isChampionshipsLoading,
    options: championshipsOptions,
  } = useGetChampionships();

  const {
    getData: getMembers,
    isLoading: isMembersLoading,
    options: membersOptions,
  } = useGetMembers();

  const { getData: getCurrentResult, isLoading: isCurrentResultLoading } =
    useGetCurrentResult();

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedChampionship || !selectedMember || place === '') {
      t('error');
      return;
    }
    try {
      const data = await update({
        championshipId: selectedChampionship.value,
        memberId: selectedMember.value,
        place: place,
      });
      if (data) {
        navigate(AppRoutes[AppRoutesEnum.RESULTS]());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeChampionshipSelection = useCallback(
    (val: unknown) => {
      setSelectedChampionship(val as ISelectOption);
    },
    [setSelectedChampionship],
  );

  const handleChangeMemberSelection = useCallback(
    (val: unknown) => {
      setSelectedMember(val as ISelectOption);
    },
    [setSelectedMember],
  );

  const handlePlaceChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPlace(value ? parseInt(value) : '');
    },
    [setPlace],
  );

  const handleGetData = useCallback(async () => {
    const oldData = await getCurrentResult(id ?? 0);
    setSelectedChampionship({
      label: `${oldData?.championship.name || ''}`,
      value:
        typeof oldData?.championship.id === 'number'
          ? oldData?.championship.id
          : 0,
    });
    setSelectedMember({
      label: `${oldData?.member.person.name || ''} ${oldData?.member.person.lastName || ''}`,
      value: typeof oldData?.member.id === 'number' ? oldData?.member.id : 0,
    });
    setPlace(oldData?.place || '');
  }, [
    getCurrentResult,
    id,
    setSelectedChampionship,
    setSelectedMember,
    setPlace,
  ]);

  useEffect(() => {
    getChampionships({
      page: 1,
      perPage: 100,
    });
    getMembers({
      page: 1,
      perPage: 100,
    });
    handleGetData();
  }, [getChampionships, getMembers, handleGetData]);

  return {
    handleSubmit,
    t,
    handleChangeChampionshipSelection,
    handleChangeMemberSelection,
    handlePlaceChange,
    isChampionshipsLoading,
    championshipsOptions,
    isMembersLoading,
    membersOptions,
    place,
    isCurrentResultLoading,
    selectedChampionship,
    selectedMember,
  };
};
