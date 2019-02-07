import Tesseract from 'tesseract.js'

class RecognitionService {

	_job;
	_tesseract;

	constructor() {
		this._configureLibrary();
	}

	startDetection(image) {
		this._job = this._tesseract.recognize(image);
	}

	_configureLibrary = () => {
		const config = this._getConfig();
		this._tesseract = Tesseract.create(config);
	}

	_getConfig = () => ({
		workerPath: `${window.location.href}tesseract/worker.js`,
		langPath: `${window.location.href}tesseract/lang/`,
		corePath: `${window.location.href}tesseract/core.js`,
	});

}

export const recognitionService = new RecognitionService();
