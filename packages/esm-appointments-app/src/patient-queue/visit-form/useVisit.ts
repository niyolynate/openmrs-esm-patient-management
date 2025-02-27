import { useConfig, FetchResponse, openmrsFetch } from '@openmrs/esm-framework';
import useSWRImmutable from 'swr/immutable';

export function useStatus() {
  const config = useConfig();
  const {
    concepts: { statusConceptSetUuid },
  } = config;

  const apiUrl = `/ws/rest/v1/concept/${statusConceptSetUuid}`;
  const { data, error } = useSWRImmutable<FetchResponse>(apiUrl, openmrsFetch);

  return {
    statuses: data?.data?.setMembers ?? [],
    isLoading: !data && !error,
  };
}

export function usePriority() {
  const config = useConfig();
  const {
    concepts: { priorityConceptSetUuid },
  } = config;

  const apiUrl = `/ws/rest/v1/concept/${priorityConceptSetUuid}`;
  const { data } = useSWRImmutable<FetchResponse>(apiUrl, openmrsFetch);

  return {
    priorities: data?.data?.setMembers ?? [],
  };
}

export function useServices(location: string) {
  const apiUrl = `/ws/rest/v1/queue?location=${location}`;
  const { data } = useSWRImmutable<{ data: { results: Array<any> } }, Error>(location ? apiUrl : null, openmrsFetch);

  return {
    services: data?.data?.results ?? [],
  };
}
