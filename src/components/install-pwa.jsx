import React from "react";

class InstallPWA extends React.Component {

	prompt;

	componentDidMount() {
		window.addEventListener(
			"beforeinstallprompt", 
			(e) => {
  				e.preventDefault();
				this.prompt = e;
				
				this.prompt.prompt();

				this.prompt.userChoice.then(
					(choiceResult) => {
				  		if (choiceResult.outcome === 'accepted') {
							console.log('User accepted the A2HS prompt');
				  		} else {
							console.log('User dismissed the A2HS prompt');
				  		}
				  		this.prompt = null;
					}
				);
			}
		)
	}

	render() {
		return null;
	}
};

export default InstallPWA;