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
		const config = this._getConfig();
		this._tesseract = Tesseract.create(config);
	}

	_getConfig = () => ({
		workerPath: `${window.location.origin}/tesseract/worker.js`,
		langPath: `${window.location.origin}/tesseract/lang/`,
		corePath: `${window.location.origin}/tesseract/core.js`,
	});

}

export const recognitionService = new RecognitionService();
