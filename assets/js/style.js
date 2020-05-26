function actionTable() {
    $('#accordeTokensTable').click(function () { $('#sectionTableToken').css('display', 'block') });
    if ($('#sectionTableToken').css('display') == 'none') {
        $('#accordeTokensTable').click(function () {$('#sectionTableToken').css('display', 'block') });
        $('#accordeTokensTable').css('background-color', '#177DDF')
        $('#eye-show').css('display', 'none')
        $('#eye-ocult').css('display', 'block')
        $('#eye-ocult').css('color', 'white')
    } if ($('#sectionTableToken').css('display') == 'block') {
        $('#accordeTokensTable').click(function () { $('#sectionTableToken').css('display', 'none') });
        $('#accordeTokensTable').css('background-color', '#ffffff')
        $('#accordeTokensTable').css('border', '1px solid #177DDF')
        $('#eye-show').css('display', 'block')
        $('#eye-ocult').css('display', 'none')
    }
}