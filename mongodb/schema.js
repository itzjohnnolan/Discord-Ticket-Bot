const { Schema, model} = require('mongoose');

const details = new Schema({
    guild_id: Number,
    user_id: Number,
    ticket_channel_id: Number,
    user_ticket_id: Number,
    ticket_status: String,
})

module.exports = model('Ticket-Details', details);