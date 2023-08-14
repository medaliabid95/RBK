const Project = require("../database/models/rProjectModel")

module.exports={
     createProject: async (req,res)=>{
        try{
             const project = await Project.create(req.body);
             res.status(201).json(project);    
        
            }catch (error) {
            res.status(400).json({ message: 'Error creating Project', error: error.message });
      }
    
    },
    getAllProjects: async (req,res)=>{
        try{
            const projects = await Project.findAll();
            res.status(200).json(projects);
        }   
        catch(error){
            res.status(400).json({ message: 'Error fetching Projects', error: error.message });
        }
    },
    getOneProject: async (req,res)=>{
        const projectId = req.params.id;

  try {
    const project = await Project.findByPk(projectId);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
    },
    updateProject:async (req,res)=>{
        const projectId = req.params.id;
        try {
            const updateProject = await Project.update(req.body, {
                where: { id: projectId },
                returning: true,
            });
            res.status(202).json(updateProject);
        } catch (error) {
            res.status(400).json({ message: 'Error updating project', error: error.message });
        }
    },
    deleteProject: async (req,res)=>{
        const projectId = req.params.id;

        try {
            const deletedCount = await Project.destroy({
                where: { id: projectId },
            });
    
            if (deletedCount > 0) {
                res.status(204).send("Project deleted Successfully");
            } else {
                res.status(404).json({ message: 'Project not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting project', error: error.message });
        }
    }


}


