import { computed, ComputedRef } from '@nuxtjs/composition-api';
import { QueryResultBase } from '@sdcjs/common';
import { HeroFirst } from '~/interfaces/HeroFirst'
import useHeroFirstData from '~/api/data/heroFirst';

export interface UseHeroFirstResult extends QueryResultBase {
    heroFirst: ComputedRef<Optional<HeroFirst>>,
}

export default function useHeroFirst( path : string ): UseHeroFirstResult {
    const { result, loading, error } = useHeroFirstData( path );

    const heroFirst : ComputedRef<Optional<HeroFirst>> = computed( () => {
        return result.value?.heroFirst.data;
    } );

    return {
        heroFirst,
        loading,
        error,
    }
}
