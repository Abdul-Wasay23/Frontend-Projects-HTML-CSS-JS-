document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('productQuickViewModal');
	const closeButton = modal.querySelector('.close-button');
	const modalContent = modal.querySelector('.quick-view-modal-content');
	const viewDetailButtons = document.querySelectorAll('.view-detail');

	function openModal() {
		modal.style.display = 'flex';
		gsap.to(modal, { opacity: 1, duration: 0.3 });
		gsap.to(modalContent, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
	}

	function closeModal() {
		gsap.to(modalContent, { scale: 0.8, duration: 0.2, ease: "power1.in" });
		gsap.to(modal, {
			opacity: 0,
			duration: 0.2,
			onComplete: () => {
				modal.style.display = 'none';
			}
		});
	}

	viewDetailButtons.forEach(button => {
		button.addEventListener('click', function (event) {
			event.preventDefault();
			openModal();
		});
	});

	closeButton.addEventListener('click', closeModal);

	modal.addEventListener('click', function (event) {
		if (event.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && modal.style.display === 'flex') {
			closeModal();
		}
	});
});


// This js is for compare modal

document.addEventListener('DOMContentLoaded', () => {

	const compareModal = document.getElementById('compareModal');
	if (!compareModal) return;

	const closeButton = compareModal.querySelector('.close-button');
	const modalContent = compareModal.querySelector('.compare-modal-content');

	// GSAP initial
	gsap.set(compareModal, { autoAlpha: 0 });
	gsap.set(modalContent, { scale: 0.9 });

	function openModal() {
		compareModal.style.display = "flex";
		gsap.to(compareModal, { duration: 0.3, autoAlpha: 1 });
		gsap.to(modalContent, { duration: 0.3, scale: 1, ease: "back.out(1.7)" });
	}

	function closeModal() {
		gsap.to(modalContent, { duration: 0.2, scale: 0.9, ease: "power2.in" });
		gsap.to(compareModal, {
			duration: 0.3,
			autoAlpha: 0,
			delay: 0.1,
			onComplete: () => compareModal.style.display = "none"
		});
	}

	// Attach open modal to all buttons
	document.querySelectorAll('.compare').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			openModal();
		});
	});

	// Close button
	if (closeButton) closeButton.addEventListener('click', closeModal);

	// Click outside modal
	compareModal.addEventListener('click', e => {
		if (!modalContent.contains(e.target)) closeModal();
	});

	// ESC key
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && compareModal.style.visibility === 'visible') {
			closeModal();
		}
	});

});
