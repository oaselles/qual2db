var qualTable;

$(document).ready(function () {
    qualTable = $('#qualtrics-table').DataTable( {
        "scrollY": "75vh",
        "scrollCollapse": false,
        "paging": false,
        "searching": true,
    },);
});

$(document).ready(function () {
    $('#exported-table').DataTable({
        "scrollY": "75vh",
        "scrollCollapse": false,
        "paging": false,
        "searching":true,
    });
});

function loadSpinner() {
    document.getElementById('loader').style.display = "inline-block";
}
