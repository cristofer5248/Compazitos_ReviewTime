function obtainAllFields() {
    $("#txttitle").val($("#tituloletra").text());
    $("#txtlogo").val($("#logo").attr('src'));
    playselectButton();
}

function sentChanges(){
    $("#tituloletra").text($("#txttitle").val());
    $("#logo").attr('src',$("#txtlogo").val());
    document.body.style.backgroundImage = "url('"+$("#txtfondo").val()+"')";
    
    
}
$('#gochanges').click(function() {
    $('#myModal4').modal('hide');
    sentChanges();
})