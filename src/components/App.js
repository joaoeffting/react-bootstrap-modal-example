import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Modal from 'react-bootstrap/lib/Modal';

class App extends React.Component {
	constructor() {
	    super();

	    this.state = {
	    	showModal: false,
	    };
	}

	openModal() {
		console.log('abriu')
		this.setState({showModal: true});
	}
	closeModal() {
		this.setState({showModal : false});
	}
	render() {
		return (
			<div className="app">
				<Jumbotron>
					<h2> Modal com React Bootstrap </h2>
					<Button bsStyle="primary" onClick={() => this.openModal()}> Abrir Modal </Button>
					<Modal show={this.state.showModal} onHide={() => this.closeModal()}>
						 <Modal.Header closeButton>
				         	<Modal.Title>Minha modal com react</Modal.Title>
				         </Modal.Header>
						<Modal.Body>
							<p>Isso é uma modal usando React Bootstrap :D</p>
						</Modal.Body>
						<Modal.Footer>
							<Button bsStyle="danger" onClick={() => this.closeModal()}>Fechar a Modal</Button>
						</Modal.Footer>
					</Modal>
				</Jumbotron>
			</div>
		)
	}
}

export default App;