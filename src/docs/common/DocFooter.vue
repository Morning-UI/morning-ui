<template>
    <footer>
        <img src="https://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png" alt=""><br>
        Under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT Licence</a>
        <br>
        Copyright © 2015-2019 Early He
        <a class="tolab" href="/lab.html">Laboratory</a>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="less">
body > div > footer{
    font-size: 12px;
    color: #aaa;
    padding: 30px 0;
    text-align: center;
    background: #333;
    position: relative;
    line-height: 1.4em;

    img {
        width: 43px;
        height: 40px;
        opacity: 0.8;
    }

    a,
    a:hover {
        color: #aaa;
        text-decoration: none;
    }

    .tolab{
        position: absolute;
        bottom: 3px;
        left: 50%;
        color: #fff;
        opacity: 0.02;
        transform: translateX(-50%);
    }
}
</style>
