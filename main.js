var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","5e0c7f38-31f4-4562-976c-9afa2a78a292-small.webp", "Amogus.jpg" , "IMG-20210428-WA0001.png", "IMG_0539.png", "OK.jpg"];
var names = ["Fmaily Book","Cris (me)", "Dorela (mother)", "tommy (dog)", "chessable (hamster)", "billy (former dog)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

