$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});
$('ul').on('click','span',function(e){
$(this).parent().fadeOut('500',function(){
    $(this).remove();
});
e.stopPropagation();
});
$(`input`).keypress(function(e){
if(e.which === 13){
    let newTodo = $(this).val();
    $(this).val('');
    $('ul').append(`<li><span><i class="far fa-trash-alt"></i> </span>${newTodo}</li>`);
    
    
}
});
$('.fa-plus').click(function(){
$('input').fadeToggle();
});