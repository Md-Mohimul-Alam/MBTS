const branches = [];
let branchId = 1;

exports.getBranches = (req, res) => {
  res.json(branches);
};

exports.createBranch = (req, res) => {
  const newBranch = { id: branchId++, ...req.body };
  branches.push(newBranch);
  res.status(201).json(newBranch);
};

exports.getBranchById = (req, res) => {
  const branch = branches.find((b) => b.id === parseInt(req.params.id));
  if (!branch) return res.status(404).json({ message: 'Branch not found' });
  res.json(branch);
};

exports.updateBranch = (req, res) => {
  const branch = branches.find((b) => b.id === parseInt(req.params.id));
  if (!branch) return res.status(404).json({ message: 'Branch not found' });
  Object.assign(branch, req.body);
  res.json(branch);
};

exports.deleteBranch = (req, res) => {
  const index = branches.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Branch not found' });
  branches.splice(index, 1);
  res.json({ message: 'Branch deleted' });
};
