
        var sent = document.querySelector(".red-button2");
        var open = document.querySelector(".modal-login");
        var close = document.querySelector(".modal-close");
        var guarantee = document.querySelector(".button-guarantee");
        var delivery = document.querySelector(".button-delivery");
        var credit = document.querySelector(".button-credit");
        var guaranteeshowe = document.querySelector(".guarantee-info");
        var deliveryclose = document.querySelector(".delivery-info");
        var deliveryshowe = document.querySelector(".delivery-info");
        var creditshowe = document.querySelector(".credit-info");

        var login = document.querySelector(".login-user");
        var password = document.querySelector(".password-user");
        var form = open.querySelector(".zalupa")

        var storage = localStorage.getItem("login")

       /* var map = document.querySelector(".map");
        map.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add("map-show");
        });*/





        sent.addEventListener("click", function (evt) {
        evt.preventDefault();
        open.classList.add("modal-show");
        login.focus();
        if (storage) {
            login.value = storage;
        }
        });
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if ( open.classList.contains("modal-show")) {
                    open.classList.remove("modal-show");
                }
            }
        });

        form.addEventListener("submit", function (evt) {
            if (!login.value || !password.value) {
            evt.preventDefault();
            console.log("tralala");
            open.classList.add("modal-error");
        } else {
            localStorage.setItem("login", login.value);
        }
        });
        
        close.addEventListener("click", function (evt) {
        evt.preventDefault();
        open.classList.remove("modal-show");
        open.classList.remove("modal-error");
        });


        credit.addEventListener("click", function (evt) {
        evt.preventDefault();
        creditshowe.classList.add("credit-showe");
        guaranteeshowe.classList.remove("guarantee-showe")
        deliveryclose.classList.add("delivery-close");
        });

        delivery.addEventListener("click", function (evt) {
        evt.preventDefault();
        guaranteeshowe.classList.remove("guarantee-showe");
        deliveryclose.classList.remove("delivery-close");
        creditshowe.classList.remove("credit-showe")
        });

        guarantee.addEventListener("click", function (evt) {
        evt.preventDefault();
        guaranteeshowe.classList.add("guarantee-showe");
        deliveryclose.classList.add("delivery-close");
        creditshowe.classList.remove("credit-showe")
        });

        
    