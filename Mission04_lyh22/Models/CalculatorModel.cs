using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_lyh22.Models
{
    public class CalculatorModel
    {
        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100.")]
        public int A { get; set; }

        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100.")]
        public int P { get; set; }

        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100.")]
        public int Q { get; set; }

        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100.")]
        public int M { get; set; }

        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100.")]
        public int F { get; set; }

        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100.")]
        public int I { get; set; }
    }

}
