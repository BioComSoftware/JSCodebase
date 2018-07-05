/**
 * @name: setWallet()
 * @description: Sets bcoin wallet object based on parameters in the process.env
 * @usage: require('./setWallet')(); wallet = setWallet()
 * @author: Mike Rightmire
 * @email:  Michael.Rightmire@groenewold-newmedia.de
 * @copyright: Groenewold New Media
 * @version: 0.9.0.0
 * @Licensing: ALl rights reserved
*/

const bcoin      		  = require('bcoin');

module.exports = function() { 
	this.setWallet = function () { // defaults
		/* Set the wallet */
		const WalletKey 	 = bcoin.wallet.WalletKey;
		const {WalletClient} = require('bclient');
		const {Network}      = require('bcoin');
		const network 	     = Network.get(process.env.net);
		const walletOptions  = {
		  network:	network.type,
		  host: 	process.env.walletHost,
		  port:		network.walletPort,
		  apiKey: 	process.env.walletApiKey,
		}
		const walletClient 	 = new WalletClient(walletOptions);
		const wallet 		 = walletClient.wallet(process.env.walletID);
		return wallet;
	}

}