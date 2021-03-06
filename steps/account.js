import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://cinsear.ru/login');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		//this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://cinsear.ru/');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
