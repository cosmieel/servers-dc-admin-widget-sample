import { Ref } from '@nuxtjs/composition-api';
import { QueryResultBase } from '@sdcjs/common';
import {
    prepareProviderHook,
    useQueryCustom,
} from '~/api/adapters';
import { HeroFirst } from '~/interfaces/HeroFirst'
import heroFirstQuery from '~/api/gql/queries/heroFirst.gql';

interface useHeroFirstResult extends QueryResultBase {
    result: Ref<Optional<{ heroFirst: { data: HeroFirst } }>>,
}

export default function useHeroFirstData( path : string ): useHeroFirstResult {
    prepareProviderHook();

    const { result, loading, error } = useQueryCustom( heroFirstQuery, {
        path,
    } );

    return {
        result, loading, error,
    };
}
