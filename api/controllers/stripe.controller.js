const stripeServices = require('../services/stripe.services')

exports.createPaymentSession = (req, res) => {
    stripeServices.createSession({ priceId: req.body.priceId }, (error, response) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        return res.status(200).json(response);
    })
}
