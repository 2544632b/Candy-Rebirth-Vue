<template>
    <div class="bg" style="background-image:url(https://i.loli.net/2018/04/15/5ad2ca39da9bb.jpg);"></div>
    <div class="notify-container"></div>
    <div class="menu">
        <div class="group">
            <a class="item mdi mdi-arrow-left hidden" id="back" @click=""></a>
            <div class="drop-down">
                <span class="item mdi mdi-format-annotation-plus" @click=""></span>
                <span class="item mdi mdi-share-variant"></span>
            </div>
        </div>
        <div class="group">
            <div class="hidden">
                <a class="item" @click="">关于</a>
            </div>
            <a @click="" class="item mdi mdi-menu"></a>
            <a @click="activeSearch()" class="item mdi mdi-magnify"></a>
            <div class="search">
                <input class="search-box" name="search" id="search" ref="search" placeholder="回车Go！">
            </div>
        </div>
    </div>
    <div id="archive" class="screen archive move-show" v-if="profile">
        <div class="archive-container" ref="container"  @scroll="handleScroll">
            <div class="author-info right-in-animation" ref="x_profile">
                <img class="avatar" src="../assets/223922884aeedb45bf77b249f183b5f3_8624852438576176182.jpg" alt="yanqing" width="100" height="100">
                <div class="name">{{ profile.profile_name }}</div>
                <div class="desc">{{ profile.blog_description }}</div>
                <div class="stat">
                    <div class="article-count">{{ profile.article_counts }}</div>
                    <div class="category-count">{{ profile.categories }}</div>
                    <div class="comment-count">{{ profile.comments }}</div>
                </div>
                <div class="copyright">
                    &copy; {{ profile.profile_name }} 2021, 2022, 2023
                    <div class="theme-info">
                        Theme <a href="https://github.com/Archeb/Candy-Rebirth">Candy-Rebirth</a> By <a href="https://mozz.ie/">Archeb</a>.
                    </div>
                </div>
            </div>
            <div class="article-list">
                <template v-for="t in articles">
                    <template v-if="t.photo">
                        <!--With photo-->
                        <div class="article-with-preview right-in-animation" :style="{'animation-duration':''+(default_num+=0.1)+'s'}">
                            <div class="cover" @click="">
                                <div class="cover-image" :style="{'background-image':'url('+t.photo+')'}"><div class="title">{{ t.title }}</div></div>
                            </div>
                            <div class="content" @click="">
                                <div class="text">
                                    {{ t.content }}
                                </div>
                            </div>
                            <div class="meta">
                                <div class="group">
                                    <a class="category" onclick="" style="">{{ t.category }}</a>
                                </div>
                                <div class="group date">{{ t.date }} · {{ t.another }}</div>
                            </div>
                        </div>
                    </template>
                    <template v-if="!t.photo">
                        <!--Without photo-->
                        <div class="article right-in-animation" :style="{'animation-duration':''+(default_num+=0.1)+'s'}">
                            <div class="title">
                                <a @click="">{{ t.title }}</a>
                                <div class="meta">
                                    <a class="category" @click="" style="">{{ t.category }}</a>
                                    {{ t.date }} · {{ t.another }}
                                </div>
                            </div>
                            <div class="content" @click="">
                                <p v-html="t.content"></p>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
<style>
    .page-container {
        justify-content: center;
        flex-direction: row-reverse;
    }
    .menu .group .item {
        color: #dedede;
    }
    .menu .group .item:hover {
        color: #fafafa;
        text-shadow: 1px 1px 10px rgba(255,255,255,0.2), 1px 1px 10px rgba(255,255,255,0.2);
    }
    .menu .group .item:active {
        color: #ffffff;
    }
    .menu .group .drop-down {
        color: #dedede;
    }
</style>
<script lang="ts" name="XzjLvu87Fq">
    import { defineComponent, reactive, ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
    import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
    import VueCookies from 'vue-cookies';

    interface FormState {
        searchKey: string;
    }
    export default defineComponent({
        setup() {
            const formState = reactive<FormState>({
                searchKey: ''
            });

            const articles = ref('');
            const profile = ref('');

            const default_num = 0.5;

            const search = ref(null);
            const activeSearch = () => {
                search.value.focus();
            }

            axios.get("http://localhost:8000/profile")
                .then((response) => {
                    profile.value = response.data;
                })
                .catch((error) => {
                    console.log("拉取失败>_<!")
                })

            axios.get("http://localhost:8000/archives")
                .then((response) => {
                    articles.value = response.data;
                })
                .catch((error) => {
                    console.log("拉取失败>_<!")
                })

            // From m.js:7
            // 从0开始，到300px完全消失
            const container = ref('');
            const x_profile = ref('');
            const isNonePointer = false;
            const handleScroll = (event) => {
                const scrollX = container.value.scrollLeft;
                if (scrollX >= 300) {
                    screenX = 300;
                }
                var hidden_value = 1 - scrollX / 300;
                x_profile.value.style.opacity = hidden_value;
            }

            return {
                formState,
                profile,
                articles,

                default_num,

                search,
                activeSearch,

                container,
                x_profile,
                isNonePointer,
                handleScroll
            };
        }
    });
</script>