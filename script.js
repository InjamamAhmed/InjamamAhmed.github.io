
$(document).ready(function(){
	// alert('Welcome to my page');
	// $("#hide").oneclick()(function(){
	//     $("#hide-show").hide();
	// })
	$("#img_photo").click(function(){
		$("#input_photo").click()
	})
    $("#show").click(function(){
        $("#hide-show").toggle();
        var mm = $("#show").text();
        console.log(mm)
        if(mm === "Show"){
            $("#show").text("Hide");
        }else{
            $("#show").text("Show");
        }
    });

});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#img_photo')
                .attr('src', e.target.result)
                .width(150)
                .height(177);
        };

        reader.readAsDataURL(input.files[0]);
    }
}