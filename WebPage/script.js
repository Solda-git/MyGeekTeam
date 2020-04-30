document.getElementById("team-link").addEventListener('click', showTeam);

function showTeam() {
//$('#nav-tab a[href="#nav-profile"]').tab('show');
document.getElementById("nav-home-tab").classList.remove('active');
document.getElementById("nav-profile-tab").classList.add('active');
document.getElementById("nav-home").classList.remove('show', 'active');
document.getElementById("nav-profile").classList.add('show', 'active');

}