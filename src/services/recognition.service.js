import Tesseract from 'tesseract.js'

class RecognitionService {

	_tesseract;

	constructor() {
		this._configureLibrary();
	}

	startDetection(image) {
		return this._tesseract.recognize(image);
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
