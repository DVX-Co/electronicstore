// NUEVO: Funcionalidad para el sidebar desplegable
document.addEventListener('DOMContentLoaded', function() {
	const toggleBtn = document.querySelector('.toggle-btn');
	const sidebar = document.querySelector('.sidebar');
	const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
	
	// Alternar sidebar en desktop
	if(toggleBtn) {
		toggleBtn.addEventListener('click', function() {
			sidebar.classList.toggle('collapsed');
		});
	}
	
	// Alternar sidebar en móvil
	if(mobileMenuBtn) {
		mobileMenuBtn.addEventListener('click', function() {
			sidebar.classList.toggle('active');
		});
	}
	
	// Animación para las tarjetas métricas
	const metricCards = document.querySelectorAll('.metric-card');
	metricCards.forEach((card, index) => {
		setTimeout(() => {
			card.style.opacity = '0';
			card.style.transform = 'translateY(20px)';
			card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
			
			setTimeout(() => {
				card.style.opacity = '1';
				card.style.transform = 'translateY(0)';
			}, 100);
		}, index * 150);
	});

	// CORRECCIÓN: Gráficos interactivos con Chart.js
	// Gráfico de ventas por categoría
	const categoryCtx = document.getElementById('categoryChart').getContext('2d');
	const categoryChart = new Chart(categoryCtx, {
		type: 'doughnut',
		data: {
			labels: ['Laptops', 'Smartphones', 'Cameras', 'Accessories', 'Tablets'],
			datasets: [{
				data: [35, 25, 15, 20, 5],
				backgroundColor: [
				'#4361ee',
				'#7209b7',
				'#f72585',
				'#4cc9f0',
				'#3a0ca3'
				],
				borderWidth: 0
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
				position: 'right',
				},
				tooltip: {
				callbacks: {
					label: function(context) {
						return `${context.label}: ${context.parsed}%`;
					}
				}
				}
			}
		}
	});

	// Gráfico de rendimiento mensual
	const performanceCtx = document.getElementById('performanceChart').getContext('2d');
	const performanceChart = new Chart(performanceCtx, {
		type: 'line',
		data: {
			labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
			datasets: [{
				label: 'Ventas ($)',
				data: [12500, 14200, 13800, 16500, 18200, 19800, 21000, 19500, 20500, 22300, 24000, 25800],
				borderColor: '#4361ee',
				backgroundColor: 'rgba(67, 97, 238, 0.1)',
				tension: 0.4,
				fill: true,
				borderWidth: 3
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
				beginAtZero: false,
				grid: {
					color: 'rgba(0, 0, 0, 0.05)'
				}
				},
				x: {
				grid: {
					display: false
				}
				}
			},
			plugins: {
				tooltip: {
				callbacks: {
					label: function(context) {
						return `Ventas: $${context.parsed.y.toLocaleString()}`;
					}
				}
				}
			}
		}
	});

	// CORRECCIÓN: Cerrar sidebar al hacer clic fuera de él en móvil
	document.addEventListener('click', function(e) {
		if (window.innerWidth <= 992) {
			if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && 
				sidebar.classList.contains('active')) {
				sidebar.classList.remove('active');
			}
		}
	});
});