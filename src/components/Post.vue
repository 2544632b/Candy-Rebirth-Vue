<template>
    <div class="bg" style="background-image:url(https://i.loli.net/2018/04/15/5ad2ca39da9bb.jpg);"></div>
    <div class="notify-container"></div>
	<div id="page" class="screen page move-show" style="overflow-y: scroll;">
		<div class="page-container" ref="page">
			<div class="page-wrapper">
				<template v-if="!article.photo">
					<div class="title">
						{{ article.title }}
						<div class="meta">
							<template v-for="t in article.category">
								<a class="category">{{ t }}</a>
							</template>
							{{ article.another }} · {{ article.date }}
						</div>
					</div>
				</template>
				<template v-if="article.photo">
					<div class="cover">
						<div class="cover-image" :style="{'background-image':'url('+article.photo+')'}">
							<div class="title">{{ article.title }}
								<div class="meta">
									<template v-for="t in article.category">
										<a class="category">{{ t }}</a>
									</template>
									{{ article.another }} · {{ article.date }}
								</div>
							</div>
						</div>
					</div>
				</template>
				<div class="content" v-html="article.content">
				</div>
				<!--
				<div id="comments">
					<div class="comments-head">
						<svg style="width:20px;height:20px" viewBox="0 0 24 24">
							<path fill="white" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7C5,5.89 5.9,5 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.9 12.75,23 12.5,23V23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z"></path>
						</svg>&nbsp;&nbsp;评论
					</div>
						<li class="comment-body comment-parent comment-even comment-by-author">
							<div class="a-comment">
								<div class="comment-element">
									<div class="comment-container">
										<div class="comment-author-avatar">
											<a target="_blank" href=""><img class="avatar" src="" alt="" width="55" height="55"></a>
										</div>
										<div class="comment-author-info">
											<div class="comment-meta">
												<span class="comment-author-name"><a href="" rel="external nofollow"></a></span>
												<a class="comment-time"></a>
											</div>
											<div class="comment-content">
												<p></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<ol class="comment-list">
							<li id="li-comment" class="comment-body comment-parent comment-odd comment-by-author">
								<div class="a-comment">
									<div class="comment-element" id="comment-5">
										<div class="comment-container">
											<div class="comment-author-avatar">
												<a target="_blank" href="http://localhost"><img class="avatar" loading="lazy" src="../assets/223922884aeedb45bf77b249f183b5f3_8624852438576176182.jpg" alt="yanqing" width="55" height="55"></a>
											</div>
											<div class="comment-author-info">
												<div class="comment-meta">
													<span class="comment-author-name">
														<a href="http://localhost" rel="external nofollow">yanqing</a>
													</span>
													<a class="comment-time">
														3分钟前<span class="detail-time">&nbsp;·&nbsp;2023-07-13 00:26</span>
													</a>
												</div>
												<div class="comment-content">
													<p>333</p>
												</div>
											</div>
										</div>
									</div>
									<a class="comment-reply" @click="">
										<span class="mdi mdi-reply"></span>
									</a>
								</div>
								<div class="comment-children">
									<ol class="comment-list">
										<li class="comment-body comment-parent comment-even comment-by-author">
											<div class="a-comment">
												<div class="comment-element">
													<div class="comment-container">
														<div class="comment-author-avatar">
															<a target="_blank" href="">
																<img class="avatar" src="../assets/223922884aeedb45bf77b249f183b5f3_8624852438576176182.jpg" alt="" width="55" height="55">
															</a>
														</div>
														<div class="comment-author-info">
															<div class="comment-meta">
																<span class="comment-author-name">123</span>
																<a class="comment-time">2023-07-12 16:31</a>
															</div>
															<div class="comment-content">
																<p>666</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ol>
								</div>
							</li>
						</ol>
					<form method="post" action="" id="comment-form" role="form">
						<div class="send-comment">
							<div class="reply-info reply-info-closed">
								<div class="left">您正在回复给 <span id="reply-name">Poi</span>：</div>
								<div class="right">
									<a @click="">
										<svg style="width:18px;height:18px;margin-top:2px" viewBox="0 0 24 24">
											<path fill="#626262" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
										</svg>
									</a>
								</div>
								<input type="hidden" name="parent" id="comment-parent" value="">
							</div>
							<div id="respond-post-4" class="respond">
								<textarea rows="8" name="text" id="textarea" class="textarea" placeholder="快来写下成为女装大佬的宣言吧！" required="" title="快来写下成为女装大佬的宣言吧！"></textarea>
								<input type="hidden" name="_" value="8430a5a08e576304bffdac6a653e425f">
								<a @click="" class="send" id="submit-comment">
									<svg style="width:50px;height:20px" viewBox="0 0 24 24">
										<path fill="#666666" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
									</svg>
								</a>
							</div>
						</div>
						<div class="extra">
							<div class="text-info session-github">从<a href="https://id.roidmc.com/authorize?response_type=code&client_id=877516344175&redirect_uri=https://blog.yanqing.net/id/continue&state=89765">ID</a>站登录GitHub用户。</div>
						</div>
					</form>
					<div class="text-info"><span class="mdi mdi-close">评论已被关闭。</span></div>
				</div>
				-->
				<div class="text-info"><span class="mdi mdi-close">评论系统还未准备好~</span></div>
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

    .session-github {
        background-color: #388bfd;
        color: white;
    }
</style>
<script lang="ts">
    import { defineComponent, reactive, ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
	import { useRouter } from 'vue-router'
	import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

    export default defineComponent({
        setup() {
			// request and get the json back..
			const router = useRouter();
			
			var article = ref('');
			axios.get("http://localhost:8000/p/" + router.currentRoute.value.params.id)
				.then((response) => {
					article.value = response.data;
				})
				.catch((error) => {
					console.log("无法拉取到文章 T_T")
					console.error(error.data)
				})
				
			return {
				article
			}
		}
    });
</script>