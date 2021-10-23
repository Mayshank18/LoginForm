import User from '../model/User.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ email: request.body.email, password: request.body.password });
        if(user) {
            
            return response.status(200).json(user);
        } else {
            console.log('Invalid');
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ email: request.body.email });
        if(exist) {
            console.log('user with this email already exist');
            return response.status(401).json({ message: 'User with the email already exists'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        console.log(`${user.fullname} has been successfully registered`)
        response.status(200).json(`${user.fullname} has been successfully registered`);
        
    } catch (error) {
        response.json('Error: ', error.message);
    }
}
