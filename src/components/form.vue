<template>
    <div class="bd">
		<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :modal-append-to-body="false"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
		<div>
		<div>
			<img class="main_img img-hover" data-imgurl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2311555492,3901087256&amp;fm=26&amp;gp=0.jpg" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2311555492,3901087256&amp;fm=26&amp;gp=0.jpg" style="background-color: rgb(195, 177, 157); width: 100%; height: 149.741px;">
		</div>
		<ul>
			<li class="listinfo">
				<p>
					<label><b>daisy绽放丨深藏起的那份爱</b></label><i class="fa fa-thumbs-o-up" style="float:right"></i>
				</p>
				<span>我爱着，什么也不说只看你在对面微笑我爱着，只要我心里知觉不必知晓你心里对我的想法 我珍惜我的秘密，也珍惜淡淡的忧伤那不曾化作痛苦的忧伤 我宣誓：我爱着放弃你，不怀抱任何希望但不是没有幸福...更多
				</span>
			</li>
			<li class="listinfo">
				<p>
					<label><b>他的爱隐秘而极致</b></label><i class="fa fa-thumbs-o-up" style="float:right"></i>
				</p>
				<span>记得没错的话，八年后的今天再次看这部电影。一个人在房间里，专注流畅地完成了观影。回顾前，隐约记得这是一部当年感动过自己的影片，但却完全没有料想到今时今刻竟会再度被感动得痛哭涕零。用了几乎一整盒纸巾，感触最深的时候，甚至失声痛哭起来。大概相较高中时候，如今更懂得某些微妙的情绪，也更能理解人生当中的一些无奈和沉默吧。他们的爱情概率极低，幸运到极致，也不幸到极点。戏剧放大了这种命运的冲突，但是，总有某些片刻让人深陷其中，为他们的错过和遗憾感到深深的失落...更多
				</span>
			</li>
			<li class="listinfo">
				<p>
					<label><b>希望不好的往事，能够有块脑海里的橡皮擦</b></label><i class="fa fa-thumbs-o-up" style="float:right"></i>
				</p>
				<span>我试过不说话、我试过硬碰硬、我试过主动和解，我试过用冷暴力反抗，还试过在躁动的过程中提示控制自己的情绪，每一种我都内心煎熬..更多
				</span>
			</li>
			<li class="listinfo">
				<p>
					<label><b>希望不好的往事，能够有块脑海里的橡皮擦</b></label><i class="fa fa-thumbs-o-up" style="float:right"></i>
				</p>
				<span>我试过不说话、我试过硬碰硬、我试过主动和解，我试过用冷暴力反抗，还试过在躁动的过程中提示控制自己的情绪，每一种我都内心煎熬..更多
				</span>
			</li>
		</ul>
		</div>
    </div>
</template>

<script>
export default {
    name:"tform",
    data() {
        return {
        	dialogVisible: false
        };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>
<style>

</style>
