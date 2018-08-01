$("#picAnswer").hide();

$("button").click(function(){
    $("#picAnswer").show();
    var age = $("#age").val();
    var patronus = $("#patronus").val();
    if (age <= 18 && patronus === "dog") {
     $("#title").html("Ron Weasley");
     $("#answer").html("Ron's Patronus is a Jack Russell Terrier! He's fun and energetic... like you!");
     $("#picAnswer").attr("src", "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg");
    } else if (age >= 18 && patronus === "dog") {
        $("#title").html("Sirius Black");
     $("#answer").html("Sirius is a loyal and protective friend!");
     $("#picAnswer").attr("src", "http://vignette3.wikia.nocookie.net/harrypotter/images/7/75/Sirius_Black_profile.jpg/revision/latest?cb=20150918055024");
    } else if (age <=18 && patronus === "stag") {
        $("#title").html("Harry Potter");
        $("#answer").html("Harry Potter is competitive but not a fighter. He does what is right!");
        $("#picAnswer").attr("src", "https://upload.wikimedia.org/wikipedia/en/4/44/HarryPotter5poster.jpg");
    } else if (age >=18 && patronus === "stag") {
        $("#title").html("James Potter");
        $("#answer").html("James Potter is mischievious and clever!");
        $("#picAnswer").attr("src", "http://vignette3.wikia.nocookie.net/harrypotter/images/e/e5/1174922_1359538274196_full.jpg/revision/latest?cb=20141104012202");
    } else {
        $("#title").html("Oops!");
        $("#answer").html("You didn't choose one of my options! Try again!");
        $("#picAnswer").attr("src", "http://www.rupertgrintpress.com/wp-content/uploads/2010/10/gofmed027.jpg");
    }
    
});