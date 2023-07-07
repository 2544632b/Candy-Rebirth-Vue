<template>
    <div class="bg" style="background-image:url(https://i.loli.net/2018/04/15/5ad2ca39da9bb.jpg);"></div>
    <div class="notify-container"></div>
    <div id="archive" class="screen archive move-show">
        <div class="archive-container">
            <div class="author-info right-in-animation" style="opacity: 1;">
                <img class="avatar" src="../assets/223922884aeedb45bf77b249f183b5f3_8624852438576176182.jpg" alt="yanqing" width="100" height="100">
                <div class="name">Hello World</div>
                <div class="desc">自喻：仙人</div>
                <div class="stat">
                    <div class="article-count">2</div>
                    <div class="category-count">1</div>
                    <div class="comment-count">1</div>
                </div>
                <div class="copyright">
                    © Hello World 2021, 2022, 2023
                    <div class="theme-info">
                        Theme <a href="https://github.com/Archeb/Candy-Rebirth">Candy-Rebirth</a> By <a href="https://mozz.ie/">Archeb</a>.
                    </div>
                </div>
            </div>
            <div class="article-list">
                <template v-for="t in templates">
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
                                <p>{{ t.content }}</p>
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
    import { defineComponent, reactive, ref } from 'vue';
    import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
    import VueCookies from 'vue-cookies';

    interface FormState {
        password: string;
        newPassword: string;
    }
    export default defineComponent({
        setup() {
            const formState = reactive<FormState>({
                password: '',
                newPassword: ''
            });

            const title = ref('');
            const another = ref('');
            const category = ref('');
            const date = ref('');
            const content = ref('');
            const photo = ref('');

            const default_num = 0.5;

            const templates = [
                {
                    "title": "123",
                    "photo": "https://i.loli.net/2018/04/15/5ad2ca39da9bb.jpg",
                    "content": "测试内容",
                    "category": "默认分类",
                    "date": "2023/7/7 - 16:06",
                    "another": "yanqing"
                },
                {
                    "title": "123 - 1",
                    "content": "欢迎使用Vue",
                    "category": "默认分类",
                    "date": "2023/7/7 - 16:07",
                    "another": "yanqing"
                },
                {
                    "title": "123 - 2",
                    "photo": "https://i.loli.net/2018/04/15/5ad2ca39da9bb.jpg",
                    "content": "欢迎使用Typecho, repeatcontent, repeatcontent, repeatcontent, repeatcontent, repeatcontent,",
                    "category": "默认分类",
                    "date": "2023/7/7 - 18:11",
                    "another": "yanqing"
                }
            ]

            axios.get("http://localhost:8871/arcives")
                .then((response) => {
                    title.value = response.data.title;
                    another.value = response.data.another;
                    category = response.data.description;
                    date.value = response.data.date;
                    content.value = response.data.content;
                    photo.value = response.data.photo;
                })
                .catch((error) => {
                    console.log("Error pulling the archives!")
                })
            return {
                formState,
                templates,
                default_num
            };
        },
    });
</script>