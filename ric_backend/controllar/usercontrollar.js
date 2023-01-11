const User = require('../model/personModel');
exports.getalluser = async (req, res, next) => {
  try {
    const user = await User.find()
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    })
  } catch (err) {
    res.status(404).json({

      status: "failed",
      message: err
    })

  }
};
// exports.getuser = async(req,res,next)=>{
//     const user = await User.findById(req.params.id)
//     res.status(200).json({
//         status: 'success',
//         data:{
//             user
//         }
//     })
// }
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};