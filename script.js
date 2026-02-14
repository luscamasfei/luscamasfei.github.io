function openModal(title, description, link) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-link').href = link;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
