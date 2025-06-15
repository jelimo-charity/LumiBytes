
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Download, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface LearningMaterial {
  id: number;
  title: string;
  description: string;
  category: string;
  ageRange: string;
  type: 'video' | 'pdf' | 'interactive' | 'game' | 'worksheet';
  fileUrl?: string;
  thumbnailUrl?: string;
  downloads: number;
  rating: number;
  createdAt: string;
  author: string;
}

export const LearningMaterialsManager = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<LearningMaterial | null>(null);
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    description: '',
    category: '',
    ageRange: '',
    type: 'pdf' as 'video' | 'pdf' | 'interactive' | 'game' | 'worksheet',
    fileUrl: '',
    thumbnailUrl: '',
    author: ''
  });

  const [materials, setMaterials] = useState<LearningMaterial[]>([
    {
      id: 1,
      title: "Counting with Colors",
      description: "Interactive worksheet for learning numbers 1-10 with colorful illustrations",
      category: "Math",
      ageRange: "3-5 years",
      type: "worksheet",
      fileUrl: "https://example.com/counting-colors.pdf",
      downloads: 234,
      rating: 4.8,
      createdAt: "2024-01-15",
      author: "Learning Team"
    },
    {
      id: 2,
      title: "Animal Sounds Memory Game",
      description: "Fun interactive game to learn animal sounds and names",
      category: "Language",
      ageRange: "2-4 years",
      type: "interactive",
      downloads: 189,
      rating: 4.6,
      createdAt: "2024-01-14",
      author: "Game Developers"
    },
    {
      id: 3,
      title: "My First Letters Tracing",
      description: "Alphabet tracing worksheets for developing fine motor skills",
      category: "Writing",
      ageRange: "4-6 years",
      type: "worksheet",
      fileUrl: "https://example.com/letter-tracing.pdf",
      downloads: 567,
      rating: 4.9,
      createdAt: "2024-01-13",
      author: "Education Specialists"
    }
  ]);

  const ageRanges = [
    "0-1 years",
    "1-2 years", 
    "2-3 years",
    "3-5 years",
    "4-6 years",
    "6-8 years",
    "8-10 years"
  ];

  const categories = [
    "Sensory Development",
    "Motor Skills",
    "Language",
    "Math",
    "Science",
    "Art & Creativity",
    "Social Skills",
    "Writing",
    "Reading",
    "Problem Solving"
  ];

  const handleCreateMaterial = () => {
    const material: LearningMaterial = {
      id: Date.now(),
      title: newMaterial.title,
      description: newMaterial.description,
      category: newMaterial.category,
      ageRange: newMaterial.ageRange,
      type: newMaterial.type,
      fileUrl: newMaterial.fileUrl || undefined,
      thumbnailUrl: newMaterial.thumbnailUrl || undefined,
      downloads: 0,
      rating: 0,
      createdAt: new Date().toISOString().split('T')[0],
      author: newMaterial.author
    };

    setMaterials([...materials, material]);
    setIsCreateModalOpen(false);
    resetForm();
    
    toast({
      title: "Learning Material Created",
      description: `"${material.title}" has been added to the library.`,
    });
  };

  const handleEditMaterial = (material: LearningMaterial) => {
    setEditingMaterial(material);
    setNewMaterial({
      title: material.title,
      description: material.description,
      category: material.category,
      ageRange: material.ageRange,
      type: material.type,
      fileUrl: material.fileUrl || '',
      thumbnailUrl: material.thumbnailUrl || '',
      author: material.author
    });
  };

  const handleUpdateMaterial = () => {
    if (!editingMaterial) return;

    const updatedMaterials = materials.map(material => 
      material.id === editingMaterial.id 
        ? {
            ...material,
            title: newMaterial.title,
            description: newMaterial.description,
            category: newMaterial.category,
            ageRange: newMaterial.ageRange,
            type: newMaterial.type,
            fileUrl: newMaterial.fileUrl || undefined,
            thumbnailUrl: newMaterial.thumbnailUrl || undefined,
            author: newMaterial.author
          }
        : material
    );

    setMaterials(updatedMaterials);
    setEditingMaterial(null);
    resetForm();
    
    toast({
      title: "Learning Material Updated",
      description: `"${newMaterial.title}" has been updated.`,
    });
  };

  const handleDeleteMaterial = (id: number) => {
    setMaterials(materials.filter(material => material.id !== id));
    toast({
      title: "Learning Material Deleted",
      description: "The learning material has been removed.",
    });
  };

  const resetForm = () => {
    setNewMaterial({
      title: '',
      description: '',
      category: '',
      ageRange: '',
      type: 'pdf',
      fileUrl: '',
      thumbnailUrl: '',
      author: ''
    });
    setEditingMaterial(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Learning Materials</h2>
          <p className="text-gray-600">Manage educational resources for children</p>
        </div>
        
        <Dialog open={isCreateModalOpen || !!editingMaterial} onOpenChange={(open) => {
          setIsCreateModalOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500">
              <Plus className="h-4 w-4 mr-2" />
              Add Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingMaterial ? 'Edit Learning Material' : 'Add New Learning Material'}</DialogTitle>
              <DialogDescription>
                {editingMaterial ? 'Update the learning material details' : 'Create a new educational resource for children'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input
                  placeholder="Enter material title"
                  value={newMaterial.title}
                  onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe what children will learn from this material"
                  rows={3}
                  value={newMaterial.description}
                  onChange={(e) => setNewMaterial({...newMaterial, description: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select onValueChange={(value) => setNewMaterial({...newMaterial, category: value})} value={newMaterial.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Age Range</Label>
                  <Select onValueChange={(value) => setNewMaterial({...newMaterial, ageRange: value})} value={newMaterial.ageRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Type</Label>
                  <Select onValueChange={(value: any) => setNewMaterial({...newMaterial, type: value})} value={newMaterial.type}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="interactive">Interactive Content</SelectItem>
                      <SelectItem value="game">Game</SelectItem>
                      <SelectItem value="worksheet">Worksheet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Author</Label>
                  <Input
                    placeholder="Content creator name"
                    value={newMaterial.author}
                    onChange={(e) => setNewMaterial({...newMaterial, author: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label>File URL</Label>
                <Input
                  placeholder="https://example.com/learning-material.pdf"
                  value={newMaterial.fileUrl}
                  onChange={(e) => setNewMaterial({...newMaterial, fileUrl: e.target.value})}
                />
              </div>

              <div>
                <Label>Thumbnail URL (optional)</Label>
                <Input
                  placeholder="https://example.com/thumbnail.jpg"
                  value={newMaterial.thumbnailUrl}
                  onChange={(e) => setNewMaterial({...newMaterial, thumbnailUrl: e.target.value})}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={editingMaterial ? handleUpdateMaterial : handleCreateMaterial}>
                  {editingMaterial ? 'Update Material' : 'Add Material'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <Card key={material.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{material.title}</CardTitle>
                  <CardDescription className="mt-2">{material.description}</CardDescription>
                </div>
                <div className="flex space-x-1 ml-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleEditMaterial(material)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDeleteMaterial(material.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{material.category}</Badge>
                  <Badge variant="secondary">{material.ageRange}</Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {material.type}
                  </span>
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {material.downloads}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>By {material.author}</span>
                  <span>{material.createdAt}</span>
                </div>

                {material.rating > 0 && (
                  <div className="flex items-center">
                    <span className="text-yellow-500">{'★'.repeat(Math.floor(material.rating))}</span>
                    <span className="ml-1 text-sm text-gray-600">({material.rating})</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
