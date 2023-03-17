<template>
    <Component :is="icon" :theme="theme" :size="size" :spin="spin"
    :fill="fill" :strokeLinecap="strokeLinecap" :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth"
    ></Component>
</template>
\
<script setup lang="ts">
    import type {Icon} from '@icon-park/vue-next/lib/runtime'
    
    defineProps<{
        /**
     * 引入icon图标
     */
        icon: Icon,
        /**
         * 用于控制图标的样式主题。该属性的可选值与其它组件库中的主题属性类似，取值如下：
        'outline'：表示描边主题，图标只有描边；
        'filled'：表示填充主题，图标只有填充；
        'two-tone'：表示双色主题，图标有两种颜色，通常用于表示对比性的场景；
        'multi-color'：表示多色主题，图标有多种颜色，通常用于复杂的图形表现。
         */
        theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color',     
        size?: number | string,
        /**用于控制图标的旋转效果 */     
        spin?: boolean,
        /** 用于控制图标的填充效果*/
        fill?: string | string[],
        /**
         * strokeLinecap是SVG中的一个属性，用于定义路径线段的端点样式。它可以设置为以下三个值之一：
            butt：表示线段的端点以直角结束（默认值）；
            round：表示线段的端点以圆形结束；
            square：表示线段的端点以方形结束。
         */
        strokeLinecap?: 'butt' | 'round' | 'square',
        /**
         * strokeLinejoin是SVG中的一个属性，用于定义路径线段之间的连接方式。它可以设置为以下三个值之一：
        miter：表示路径线段的连接点以锐角连接（默认值）；
        round：表示路径线段的连接点以圆弧连接；
        bevel：表示路径线段的连接点以斜角连接。
         */
        strokeLinejoin?: 'miter' | 'round' | 'bevel',
        strokeWidth?: number

    }>()
</script>

<style></style>