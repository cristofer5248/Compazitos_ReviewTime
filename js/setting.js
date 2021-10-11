function obtainAllFields() {
    $("#txttitle").val($("#tituloletra").text());
    $("#txtlogo").val($("#logo").attr('src'));
    playselectButton();
}

function sentChanges(){
    $("#tituloletra").text($("#txttitle").val());
    
}
$('#gochanges').click(function() {
    alert('ff');
    sentChanges();
})