using System;
using System.Threading.Tasks;
using AutoMapper;
using Diploms.Core;
using Diploms.Dto;
using Diploms.Dto.Departments;

namespace Diploms.Services.Departments
{
    public class DepartmentsService 
    {
        private readonly IRepository<Department> _repository;
        private readonly IMapper _mapper;

        public DepartmentsService(IRepository<Department> repository, IMapper mapper)
        {
            _repository = repository ?? throw new System.ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new System.ArgumentNullException(nameof(mapper));
        }

        public async Task<OperationResult> Add(DepartmentEditDto model)
        {
            var result = new OperationResult();

            try
            {
                var department  = _mapper.Map<Department>(model);
                department.CreateDate = DateTime.UtcNow;
                _repository.Add(department);

                await _repository.SaveChanges();
            }
            catch(Exception e)
            {
                result.Errors.Add(e.Message);
            }
            
            return result;
        }

        public async Task<OperationResult> Edit(DepartmentEditDto model)
        {
            var result = new OperationResult();

            try
            {
                var department  = _mapper.Map<Department>(model);
                department.ChangeDate = DateTime.UtcNow;
                _repository.Update(department);

                await _repository.SaveChanges();
            }
            catch(Exception e)
            {
                result.Errors.Add(e.Message);
            }
            
            return result;
        }
    }
}