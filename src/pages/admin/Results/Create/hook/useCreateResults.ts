import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGetChampionships, useGetMembers } from '@features/Admin/Results';
import { useCreateResults } from '@features/Admin/Results/hooks/create';
import { ISelectOption } from '@entities/components/editor';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useCreateResultsPage = () => {
  const { t } = useTranslation();
  const { create } = useCreateResults();
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

  useEffect(() => {
    getChampionships({
      page: 1,
      perPage: 100,
    });
    getMembers({
      page: 1,
      perPage: 100,
    });
  }, [getChampionships, getMembers]);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedChampionship || !selectedMember || place === '') {
      t('error');
      return;
    }
    try {
      const data = await create({
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
  };
};
