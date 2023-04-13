import {
    provideApolloClient,
    useQuery,
    useResult,
    useMutation,
    useSubscription,
} from '@vue/apollo-composable';
import { apolloClient } from '~/plugins/provideApolloClient';

const prepareProviderHook = (): void => {
    provideApolloClient( apolloClient );
};

export {
    useQuery as useQueryCustom,
    useResult as useResultCustom,
    useMutation as useMutationCustom,
    useSubscription as useSubscriptionCustom,
    prepareProviderHook,
};
