<template>
    <loading-wrapper
        :loading="loading"
        :error="error"
    >
        <ui-container
            v-if="heroFirst"
            class="reg-hero-1"
            container-size="l"
        >
            <div
                class="reg-hero-1__content"
            >
                <ui-grid-row
                    justify="space-between"
                    align-items="center"
                >
                    <ui-grid-col
                        :xs="{
                            span: 24,
                        }"
                        :md="{
                            span: 13,
                        }"
                        :xl="{
                            span: 14
                        }"
                    >
                        <p
                            v-if="heroFirst.tagline"
                            class="reg-hero-1__tagline"
                        >
                            <span>{{ heroFirst.tagline }}</span>
                        </p>
                        <h1
                            v-if="heroFirst.title"
                            class="reg-hero-1__title"
                        >
                            <span>{{ heroFirst.title }}</span>
                        </h1>
                        <div
                            v-if="heroFirst.description"
                            class="reg-hero-1__description"
                        >
                            <span>{{ heroFirst.description }}</span>
                        </div>
                        <magic-link
                            v-if="heroFirst.btnType && heroFirst.btnText && heroFirst.btnLink"
                            v-slot="{ navigate, href }"
                            :link="heroFirst.btnLink"
                            is-custom
                            :is-target-blank="heroFirst.btnLinkTarget === '_blank'"
                        >
                            <ui-button
                                class="reg-hero-1__button"
                                v-bind="linkIcon"
                                :type="heroFirst.btnType"
                                :href="href"
                                button-size="l"
                                @click="navigate"
                            >
                                {{ heroFirst.btnText }}
                            </ui-button>
                        </magic-link>
                    </ui-grid-col>
                    <ui-grid-col
                        :xs="{
                            span: 24,
                        }"
                        :sm="{
                            span: 18,
                            push: 3,
                        }"
                        :md="{
                            span: 10,
                            push: 0,
                        }"
                        :xl="{
                            span: 8
                        }"
                    >
                        <img
                            class="reg-hero-1__illustration"
                            :src="imageFormat.src"
                            :alt="imageFormat.alt"
                            loading="lazy"
                        >
                    </ui-grid-col>
                </ui-grid-row>
            </div>
        </ui-container>
    </loading-wrapper>
</template>

<script lang="ts">
import { defineComponent, useRoute, computed, useContext } from '@nuxtjs/composition-api';
import { deviceInfo } from '@sdcjs/common';
import useHeroFirst from '~/api/heroFirst';

export default defineComponent( {
    setup( props ) {
        const path = useRoute().value.path;
        const { heroFirst, error, loading } = useHeroFirst( path );
        const { isMobile } = deviceInfo( useContext() );

        const linkIcon = computed( () => {
            if ( heroFirst.value?.btnType !== 'link' ) {
                return;
            }

            return {
                icon         : 'arrow-right',
                iconPosition : 'right',
            };
        } );

        const imageFormat = computed( () => {
            if ( isMobile.value ) {
                return {
                    src : heroFirst.value?.imgMobile?.src ?? heroFirst.value?.imgDesktop.src,
                    alt : heroFirst.value?.imgMobile?.alt ?? heroFirst.value?.imgDesktop.alt,
                };
            }

            return {
                src : heroFirst.value?.imgDesktop.src,
                alt : heroFirst.value?.imgDesktop.alt,
            };
        } )

        return {
            heroFirst,
            linkIcon,
            error,
            loading,
            imageFormat,
        }
    },
} );
</script>

<style lang="scss" scoped>
.reg-hero-1 {
    color: var(--text-color-primary);
    white-space: pre-line;
    background-repeat: no-repeat;
    background-position: top 0 right 0;
    background-size: auto 170px;

    @include media-breakpoint-up(sm) {
        background-size: contain;
    }

    &__content {
        padding-top: var(--space-64);
        padding-bottom: var(--space-64);

        @include media-breakpoint-up(xxl) {
            padding-top: var(--space-96);
            padding-bottom: var(--space-96);
        }
    }

    &__tagline {
        margin-bottom: var(--space-32);
        @include text-l-bolder();
    }

    &__title {
        margin-bottom: var(--space-16);
        @include headline-1();
    }

    &__description {
        color: var(--text-color-Firstary);
        @include text-l-normal();
    }

    &__illustration {
        display: block;
        width: 100%;
        margin-top: var(--space-48);

        @include media-breakpoint-up(md) {
            margin-top: 0;
        }
    }

    &__button {
        margin-top: var(--space-32);
    }
}
</style>
