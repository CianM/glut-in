import Tesseract from 'tesseract.js';

import blacklist from "../data/gluten-blacklist.json";

class RecognitionService {

	_tesseract;

	constructor() {
		this._configureLibrary();
	}

	startDetection(image) {
		return this._tesseract.recognize(image);
	}

	detect(labelText) {
		const text = labelText.toLowerCase();
		const { terms } = blacklist;
		
		const inText = term => text.includes(term);
		const checkTextForTerms = (resolve, reject) => terms.some(inText) ? resolve() : reject();
		
		return new Promise(checkTextForTerms);
	}

	_configureLibrary = () => {
		switch(process.env.NODE_ENV) {
			case "production": {
				this._tesseract = Tesseract;
				break;
			}

			case "development":
			default: {
				const config = this._getConfig();
				this._tesseract = Tesseract.create(config);
				break;
			}

		}
	}

	_getConfig = () => {
		const path = `${window.location.origin}${process.env.PUBLIC_URL}`;
		return {
			workerPath: `${path}/tesseract/worker.js`,
			langPath: `${path}/tesseract/lang/`,
			corePath: `${path}/tesseract/core.js`,
		}
	};

}

export const recognitionService = new RecognitionService();
