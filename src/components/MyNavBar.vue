<template>
    <div class="navbar">
        <div class="icon">
            <img v-bind:src="logo" alt="vue logo" class="logo">
        </div>


        <div class="menu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">COURSE MATERIALS</a></li>
                <li><a href="#">ASSESSMENT</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </div>
        <div class="search">
            <input class="srch" type="search" name="" placeholder="Type To Find">
            <a href="#"> <button class="btn">Find</button></a>
        </div>
    </div>
</template>
<script>
export default {
    name: "my-navbar",
    data() {
        return {
            logo: require("../assets/logo.png")
        };
    }
};
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
}

.menu {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu ul {
    list-style: none;
    display: flex;
}

.menu ul li {
    margin-left: 30px;
}

.menu ul li a {
    text-decoration: none;
    color: #fff;
    font-family: Arial;
    font-weight: bold;
    transition: 0.4s ease-in-out;
}

.menu ul li a:hover {
    color: #ff7200;
}

.search {
    display: flex;
    align-items: center;
}

.srch {
    font-family: 'Times New Roman';
    width: 150px;
    height: 30px;
    background: transparent;
    border: 1px solid #ff7200;
    color: #fff;
    border-right: none;
    font-size: 16px;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.btn {
    width: 80px;
    height: 30px;
    background: #ff7200;
    border: 2px solid #ff7200;
    color: #fff;
    font-size: 15px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    transition: 0.2s ease;
    cursor: pointer;
}

.btn:hover {
    color: #000;
}

.btn:focus {
    outline: none;
}

.srch:focus {
    outline: none;
}
</style>