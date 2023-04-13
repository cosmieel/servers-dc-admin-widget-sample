<template>
    <span v-if="!link">
        <slot />
    </span>
    <a
        v-else-if="isAbsoluteLink"
        :href="link"
        :target="isTargetBlank ? '_blank' : '_self'"
    >
        <slot />
    </a>
    <a
        v-else-if="isAnchorLink"
        :href="link"
        @click="handleClick"
    >
        <slot />
    </a>
    <nuxt-link
        v-else-if="isCustom"
        v-slot="{ navigate, href }"
        :to="link"
        custom
    >
        <slot
            :navigate="navigate"
            :href="href"
        />
    </nuxt-link>
    <nuxt-link
        v-else
        :to="link"
    >
        <slot />
    </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const HTTP_PROTOCOL = 'http';
const isAbsolute = ( link : string ) : boolean => link.startsWith( HTTP_PROTOCOL );
const isAnchor = ( link : string ) : boolean => link.startsWith('#');

const handleAnchorClick = ( event : Event, link : string ) => {
    const isAnchorLink = isAnchor( link )

    if ( !isAnchorLink ) {
        return;
    }

    event.preventDefault();

    const elementToScroll = document.querySelector( link );

    if ( !elementToScroll ) {
        return;
    }

    elementToScroll.scrollIntoView( {
        block    : 'center',
        behavior : 'smooth',
    } );
}

export default defineComponent( {
    props : {
        link : {
            type    : String,
            default : '',
        },
        isTargetBlank : Boolean,
        isCustom      : Boolean,
    },

    setup( { link, isTargetBlank } ) {
        const isAbsoluteLink = isAbsolute( link ) || isTargetBlank;
        const isAnchorLink = isAnchor( link );
        const handleClick = ( e : Event ) => {
            handleAnchorClick( e, link );
        }

        return {
            isAbsoluteLink,
            handleClick,
            isAnchorLink,
        }
    },
} );
</script>
