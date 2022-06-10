import './index.css'
import App from './App'
import Expenses from './pages/expenses'
import Invoice from './pages/invoice'
import Invoices from './pages/invoices'

import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root')
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="expenses" element={<Expenses />} />
				<Route path="invoices" element={<Invoices />}>
					<Route
						index
						element={
							<main style={{ padding: '1rem' }}>
								<p>Select an invoice</p>
							</main>
						}
					/>
					<Route path=":invoiceId" element={<Invoice />} />
				</Route>
				<Route
					path="*"
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
		</Routes>
	</BrowserRouter>,
	rootElement,
)
