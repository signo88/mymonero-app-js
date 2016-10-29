"use strict"
//
//
//
////////////////////////////////////////////////////////////////////////////////
// Principal class
//
class Persister
{
    //
    //
    ////////////////////////////////////////////////////////////////////////////////
    // Lifecycle - Initialization
    //
    constructor(options, context)
    {
        var self = this;
        self.options = options
        self.context = context
        //
        self.setup()
    }
    setup()
    {
        var self = this
    }


    ////////////////////////////////////////////////////////////////////////////////
    // Runtime - Accessors - Public
	
	documentsWithQuery(query, fn)
	{
		var self = this
		//
		self.__documentsWithQuery(query, fn)
	}


    ////////////////////////////////////////////////////////////////////////////////
    // Runtime - Imperatives - Public


    ////////////////////////////////////////////////////////////////////////////////
    // Runtime - Accessors - Private
	
	__documentsWithQuery(query, fn)
	{
		var self = this
		//
		console.log("Error: You must override __documentsWithQuery in ", self)
	}


    ////////////////////////////////////////////////////////////////////////////////
    // Runtime - Imperatives - Private


    ////////////////////////////////////////////////////////////////////////////////
    // Runtime - Delegation - Private

}
module.exports = Persister